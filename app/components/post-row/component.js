import Ember from 'ember';

export default Ember.Component.extend({

    score: Ember.computed('post.downvotes', 'post.upvotes', function () {
        return (this.get('post.upvotes') || 0) -
            (this.get('post.downvotes') || 0);
    }),

    hasPositiveScore: Ember.computed('score', function () {
        return this.get('score') > 0;
    }),

    isUpvote  : Ember.computed('voteStatus', function () {
        return (this.get('voteStatus') || 0) > 0;
    }),
    isDownvote: Ember.computed('voteStatus', function () {
        return (this.get('voteStatus') || 0) < 0;
    }),

    actions: {

        // NOTE: voteStatus is not a long term solution - here as a stub

        upvote: function () {
            let voteStatus = this.get('voteStatus') || 0;

            if (voteStatus < 0) {
                // revert our downvote, but not upvote
                this.setProperties({
                    'post.downvotes': this.get('post.downvotes') - 1,
                    voteStatus      : 0
                });
            }
            else if (voteStatus === 0) {
                this.setProperties({
                    'post.upvotes': this.get('post.upvotes') + 1,
                    voteStatus    : 1
                });
            }
        },

        downvote: function () {
            let voteStatus = this.get('voteStatus') || 0;

            if (voteStatus > 0) {
                // revert our upvote, but not upvote
                this.setProperties({
                    'post.upvotes': this.get('post.upvotes') - 1,
                    voteStatus    : 0
                });
            }
            else if (voteStatus === 0) {
                this.setProperties({
                    'post.downvotes': this.get('post.downvotes') + 1,
                    voteStatus      : -1
                });
            }
        }
    }
});
