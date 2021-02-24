import React,{Component} from 'react';
import ContactList from './ContactList';
import axios from 'axios';

class UpdateContact extends React.Component{
    constructor(props){
        super(props)

        this.state={
            contactId : this.props.match.params.id, 
            contactName : "",
            contactNumber: ""
        }

     this.updateContactInfo = this.updateContactInfo.bind(this);
     this.contactNameChangeHandler = this.contactNameChangeHandler.bind(this);
     this.contactNumberChangeHandler = this.contactNumberChangeHandler.bind(this);

    };

    componentDidMount(){
      alert("get contact by id")
       axios.get('http://localhost:8080/contact/getContact/'+this.state.contactId).
       then((posRes)=>{
          let contact = posRes.data;
          console.log(contact)
          if(contact!=null){
              this.setState({
                  contactName : contact.contactName,
                  contactNumber : contact.contactNumber
              })
            
          }

       },(errRes)=>{
           alert(errRes);
       })
    }

    contactNameChangeHandler = (event)=>{
      this.setState({
         contactName : this.refs.contactName.value
      })
       console.log(event.target.value)
    }

    contactNumberChangeHandler = (event)=>{
        this.setState({
           contactNumber : event.target.value
        })
  
      }

    updateContactInfo = (event)=>{
         event.preventDefault();;
        alert("updateContactINfo");
       let contact = {
           contactId : this.state.contactId,
           contactName : this.state.contactName,
           contactNumber : this.state.contactNumber
       }
       console.log('contact => ' + JSON.stringify(contact));

       axios.put('http://localhost:8080/contact/updateContact/'+this.state.contactId, contact).
             then((posRes)=>{
                 if(posRes != null)
                 this.props.history.push('/contacts')
             },(errRes)=>{
                 alert(errRes);
             })
    }

 
     cancel(){
        this.props.history.push("/contacts");
     }

    render(){
        return(
            <div>
            <div  className="container">
                <div className="card col-md-6 offset-md-3 offset-md-3">
                   <h3 className="text-center">Update Contact</h3>
                   <div className="card body">
                   <form>
                     <div className="form-group">
                         <label>ContactID ::</label>
                         <input type="number" name="contactId" value = {this.state.contactId} ref="contactId" placeholder="Contact ID" readOnly
                         className="form-control" />
                     </div>
                     <div className="form-group">
                         <label>ContactName::</label>
                         <input type="text" name="contactName" value = {this.state.contactName} ref="contactName" placeholder="Contact Name" onChange = {this.contactNameChangeHandler}
                         className="form-control" />
                     </div>
                     <div className="form-group">
                         <label>ContactNumber::</label>
                         <input type="number" name="contactNumber" value = {this.state.contactNumber} ref="contactNumber" placeholder="Contact Number" onChange = {this.contactNumberChangeHandler}
                         className="form-control" />
                     </div>
                     <button className="btn btn-success" onClick={this.updateContactInfo}>Submit</button>&nbsp;
                     <button className="btn btn-danger" onClick={this.cancel.bind(this)}>Cancel</button>
                   </form> 
                   </div>
                </div>
            </div>
          </div>
        )
    }
}

export default UpdateContact;