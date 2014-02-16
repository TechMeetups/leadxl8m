// Routes 

Meteor.Router.add(
	{
	'/':'homepage', 
	'/campaign':'campaign', 
	'/company':'company', 
	'/person':'person', 
	'/activity':'activity', 
	'/calendar':'calendar'
	}
)

// Campaigns 

Meteor.autosubscribe( function()
{
	Meteor.subscribe( "campaigns",Meteor.userId());
})	

Campaigns = new Meteor.Collection("campaigns"); 

// Activity

Meteor.autosubscribe( function()
{
	Meteor.subscribe( "activity",Meteor.userId());
})	

Activity = new Meteor.Collection("activity"); 

// Company

Meteor.autosubscribe( function()
{
	Meteor.subscribe( "company",Meteor.userId());
})	

Company = new Meteor.Collection("company"); 

// Person

Meteor.autosubscribe( function()
{
	Meteor.subscribe( "person",Meteor.userId());
})	

Person = new Meteor.Collection("person"); 


// Calendar Events 

Meteor.autosubscribe( function()
{
	Meteor.subscribe( "calevents",Meteor.userId());
})	

CalEvents = new Meteor.Collection("calevents"); 



// Generic Functions 

 var okCancelEvents = function (selector, callbacks) {
  var ok = callbacks.ok || function () {};
  var cancel = callbacks.cancel || function () {};

  var events = {};
  events['keyup '+selector+', keydown '+selector+', focusout '+selector] =
    function (evt) {
      if (evt.type === "keydown" && evt.which === 27) {
        // escape = cancel
        cancel.call(this, evt);

      } else if (evt.type === "keyup" && evt.which === 13) {
        // blur/return/enter = ok/submit if non-empty
        var value = String(evt.target.value || "");
        if (value)
          ok.call(this, value, evt);
        else
          cancel.call(this, evt);
      }
    };

  return events;
};
