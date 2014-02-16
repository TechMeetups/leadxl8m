Meteor.publish("campaigns", function(userId) 
{
    return Campaigns.find({userId: userId});
});

Campaigns = new Meteor.Collection("campaigns"); 


Campaigns.allow({
        insert: function(userId, doc) {
                return !!userId
        },

        update: function(userId, doc) {
                if(userId && doc.userId == userId) return true;
                return false;
        },
        
        remove: function(userId, doc) {
                if(userId && doc.userId == userId) return true;
                return false;
        }
})

Meteor.publish("activity", function(userId) 
{
    return Activity.find({userId: userId});
});

Activity = new Meteor.Collection("activity"); 


Activity.allow({
        insert: function(userId, doc) {
                return !!userId
        },

        update: function(userId, doc) {
                if(userId && doc.userId == userId) return true;
                return false;
        },
        
        remove: function(userId, doc) {
                if(userId && doc.userId == userId) return true;
                return false;
        }
})

Meteor.publish("company", function(userId) 
{
    return Company.find({userId: userId});
});

Company = new Meteor.Collection("company"); 


Company.allow({
        insert: function(userId, doc) {
                return !!userId
        },

        update: function(userId, doc) {
                if(userId && doc.userId == userId) return true;
                return false;
        },
        
        remove: function(userId, doc) {
                if(userId && doc.userId == userId) return true;
                return false;
        }
})

Meteor.publish("person", function(userId) 
{
    return Person.find({userId: userId});
});

Person = new Meteor.Collection("person"); 


Person.allow({
        insert: function(userId, doc) {
                return !!userId
        },

        update: function(userId, doc) {
                if(userId && doc.userId == userId) return true;
                return false;
        },
        
        remove: function(userId, doc) {
                if(userId && doc.userId == userId) return true;
                return false;
        }
})

Meteor.publish("calevents", function(userId) 
{
    return CalEvents.find({userId: userId});
});

CalEvents = new Meteor.Collection("calevents"); 

