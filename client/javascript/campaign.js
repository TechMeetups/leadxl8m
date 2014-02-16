Template.campaign_list.campaigns = function()
{
		return Campaigns.find(); 
}

Template.campaign_item.events(
{
  "click .delete": function(e,t)
  {
    alert("Removing campaign") ;
    Campaigns.remove({_id: t.data._id}); 
  }, 

  "click .edit": function(e,t)
  {
    Session.set("currentlyEditingCampaign",t.data._id);
    alert("Editing campaign") ;
    
  }, 

  "click .cancel": function(e,t)
  {
    Session.set("currentlyEditingCampaign",false);  
  }, 

  "submit form": function(e,t)
  {
    e.preventDefault(); 

    var campaignname = t.find(".campaignname").value; 
    var campaignsdate = t.find(".campaignsdate").value; 
    var campaignedate = t.find(".campaignedate").value; 
    alert(campaignname+campaignsdate+campaignedate) ;
    
    Campaigns.update({ _id: t.data._id}, { $set: {name: campaignname, sdate: campaignsdate, edate: campaignedate}});
    Session.set("currentlyEditingCampaign",false);  
  }
}
)  


Template.add_campaign.events
(
  { "click .add": function(e,t)
      {
        e.preventDefault(); 
        
        var campaignname = $("#name").val(); 
        var campaignsdate = $("#sdate").val(); 
        var campaignedate = $("#edate").val(); 
        
        Campaigns.insert({ name: campaignname, sdate: campaignsdate, edate: campaignedate, userId: Meteor.userId() }); 
      
        $("#name").val(""); 
        $("#sdate").val(""); 
        $("#edate").val(""); 
      }
  }
) 


Template.campaign_item.isEditing = function(e,t)
{
  return Session.equals("currentlyEditingCampaign",this._id) ; 
}
