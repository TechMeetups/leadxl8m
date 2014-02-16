Template.person_list.person = function()
{
		return Person.find(); 
}

Template.person_item.events(
{
  "click .delete": function(e,t)
  {
    Person.remove({_id: t.data._id}); 
  }, 

  "click .edit": function(e,t)
  {
    Session.set("currentlyEditingPerson",t.data._id);  
  }, 

  "click .cancel": function(e,t)
  {
    Session.set("currentlyEditingPerson",false);  
  }, 

  "submit form": function(e,t)
  {
    e.preventDefault(); 

    var personname = t.find(".personname").value; 
    
    Person.update({ _id: t.data._id}, { $set: {name: personname} });
    Session.set("currentlyEditingPerson",false);  
  }
})  


Template.add_person.events
(
  { "click .add": function(e,t)
      {
        e.preventDefault(); 
        
        var personname = $("#name").val(); 
        var personemail = $("#email").val(); 
        var persontwitter = $("#twitter").val(); 
        var personfacebook = $("#facebook").val(); 
        var personphone = $("#phone").val(); 

        Person.insert({ name: personname, email: personemail, twitter: persontwitter, facebook: personfacebook, phone: personphone, userId: Meteor.userId() }); 
      
        $("#name").val(""); 
        $("#email").val(""); 
        $("#twitter").val(""); 
        $("#facebook").val(""); 
        $("#phone").val("");        
      }
  }
) 

Template.person_item.isEditing = function(e,t)
{
  return Session.equals("currentlyEditingPerson",this._id) ; 
}
