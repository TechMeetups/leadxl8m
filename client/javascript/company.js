Template.company_list.company = function()
{
		return Company.find(); 
}

Template.company_item.events
(
  {
    "click .delete": function(e,t)
    {
      Company.remove({_id: t.data._id}); 
    }, 

    "click .edit": function(e,t)
    {
      Session.set("currentlyEditingCompany",t.data._id);  
    }, 

    "click .cancel": function(e,t)
    {
      Session.set("currentlyEditingCompany",false);  
    }, 

    "submit form": function(e,t)
    {
      e.preventDefault(); 

      var companyname = t.find(".companyname").value; 
      
      Company.update({ _id: t.data._id}, { $set: {name: companyname} });
      Session.set("currentlyEditingCompany",false);  
    }
  }
)  


Template.add_company.events
(
	{ "click .add": function(e,t)
  		{
        e.preventDefault(); 
    		
    		var companyname = $("#name").val(); 
        var companycity = $("#city").val(); 
        var companytwitter = $("#twitter").val(); 
        var companyfacebook = $("#facebook").val(); 
        var companyphone = $("#phone").val(); 

    		Company.insert({ name: companyname, city: companycity, twitter: companytwitter, facebook: companyfacebook, phone: companyphone, userId: Meteor.userId() }); 
    	
        $("#name").val(""); 
        $("#city").val(""); 
        $("#twitter").val(""); 
        $("#facebook").val(""); 
        $("#phone").val("");    		
  		}
	}
) 


Template.add_company.events(
  okCancelEvents('#phone',
  {
    ok: function (text, evt) 
    {
        e.preventDefault(); 

        var companyname = $("#name").val(); 
        var companycity = $("#city").val(); 
        var companytwitter = $("#twitter").val(); 
        var companyfacebook = $("#facebook").val(); 
        var companyphone = $("#phone").val(); 

        Company.insert({ name: companyname, city: companycity, twitter: companytwitter, facebook: companyfacebook, phone: companyphone, userId: Meteor.userId() }); 
      
        $("#name").val(""); 
        $("#city").val(""); 
        $("#twitter").val(""); 
        $("#facebook").val(""); 
        $("#phone").val("");  
    }
  })
);  



Template.company_item.isEditing = function(e,t)
{
  return Session.equals("currentlyEditingCompany",this._id) ; 
}

