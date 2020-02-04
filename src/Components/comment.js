(function(exports) {
    'use strict';
    
    exports.app.CommentBox = React.createClass({
        getInitialState: function() {
            return {
                comments: []
            }
        },
        componentDidMount: function() {
            this.getComments();
            setInterval(this.getComments, 1000);
        },
        getComments: function() {
            $.getJSON(this.props.url).then(function(data) {
                this.setState({ comments: data });
            }.bind(this));
        },
        saveComment: function(comment) {
            $.ajax({
                url: this.props.url,
                dataType: 'json',
                type: 'POST',
                data: comment,
                success: function(data) {
                    this.setState({comments: data});
                }.bind(this),
                error: function(xhr, status, err) {
                    console.error(this.props.url, status, err.toString());
                }.bind(this)
            });
        },
        render: function() {
            return (
                <div className="comment-box well">
                    <app.CommentList comments={this.state.comments} />
                    <app.CommentForm saveComment={this.saveComment} />
                </div>
            );
        }
    });
}(window));

