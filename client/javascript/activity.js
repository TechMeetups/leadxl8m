Template.activity_list.activity = function()
{
		return Activity.find(); 
}

Template.activity_item.events
(
{
  "click .delete": function(e,t)
  {
    Activity.remove({_id: t.data._id}); 
  }, 

  "click .edit": function(e,t)
  {
    Session.set("currentlyEditingActivity",t.data._id);  
  }, 

  "click .cancel": function(e,t)
  {
    Session.set("currentlyEditingActivity",false);  
  }, 

  "submit form": function(e,t)
  {
    e.preventDefault(); 

    var activityname = t.find(".activityname").value; 
    
    Activity.update({ _id: t.data._id}, { $set: {name: activityname} });
    Session.set("currentlyEditingActivity",false);  
  }
})  

Template.add_activity.events
(
  { "click .add": function(e,t)
      {
        e.preventDefault(); 
        
        var activitydate = $("#date").val(); 
        var activitytype = $("#type").val(); 
        var activitycompany = $("#company").val(); 
        var activitymessage = $("#message").val(); 
        var activityresult = $("#result").val(); 

        Activity.insert({ date: activitydate, type: activitytype, company: activitycompany, message: activitymessage, result: activityresult, userId: Meteor.userId() }); 
      
        $("#date").val(""); 
        $("#type").val(""); 
        $("#company").val(""); 
        $("#message").val(""); 
        $("#result").val(""); 
      }
  }
) 

Template.activity_item.isEditing = function(e,t)
{
  return Session.equals("currentlyEditingActivity",this._id) ; 
}
