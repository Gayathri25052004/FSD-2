const eventManagement=require('./EventManagement');
const manager=new eventManagement();

manager.on("start",()=>{console.log("Event started !!")});
manager.on("inprogress",()=>{console.log("Event is in progress !!!")});
manager.on("completed",()=>{console.log("Event completed!!1")});

manager.StartEvent();
manager.InProgressEvent();
manager.CompletedEvent();