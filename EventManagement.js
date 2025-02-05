const events=require('events');


class EventManagement extends events{
  StartEvent(){
    this.emit("start");
  }
  InProgressEvent(){
    this.emit("inprogress");
  }
  CompletedEvent(){
    this.emit("completed");
  }
}
module.exports=EventManagement;