import React,{Component} from 'react';
import ContactList from './ContactList';
import axios from 'axios';

class AddContact extends React.Component{
    constructor(){
        super()

        this.state={
            contactId : "", 
            contactName : "",
            contactNumber: ""
        }

      /*  this.contactIdHandler = this.contactIdHandler.bind(this);
        this.contactNameHandler = this.contactNameHandler.bind(this);
        this.contactNumberHandler = this.contactNumberHandler.bind(this);*/
        this.saveContact = this.saveContact.bind(this); 
    };

    saveContact = ()=>{
        let contact = {
            contactId : this.refs.contactId.value,
            contactName : this.refs.contactName.value,
            contactNumber : this.refs.contactNumber.value
        }

        axios.post("http://localhost:8080/contact/saveContact",contact)
             .then((postRes)=>{
               if(postRes!=null)
               alert("Contact added");
             },(errRes)=>{
                alert("Contact not added");
             } 
             )

             this.props.history.push("/contacts");
    }

  /*  contactIdHandler = (event)=>{
       this.setState({contactId:event.target.value});
    };

    contactNameHandler = (event)=>{
        this.setState({contactName:event.target.value});
     };

     contactNumberHandler = (event)=>{
        this.setState({contactNumber:event.target.value});
     };*/

     cancel(){
        this.props.history.push("/contacts");
     }

    render(){
        return(
            <div>
              <div  className="container">
                  <div className="card col-md-6 offset-md-3 offset-md-3">
                     <h3 className="text-center">Add Contact</h3>
                     <div className="card body">
                     <form>
                       <div className="form-group">
                           <label>ContactID ::</label>
                           <input type="number" name="contactId" ref="contactId" placeholder="Contact ID" 
                           className="form-control" />
                       </div>
                       <div className="form-group">
                           <label>ContactName::</label>
                           <input type="text" name="contactName" ref="contactName" placeholder="Contact Name" 
                           className="form-control" />
                       </div>
                       <div className="form-group">
                           <label>ContactNumber::</label>
                           <input type="number" name="contactNumber" ref="contactNumber" placeholder="Contact Number" 
                           className="form-control" />
                       </div>
                       <button className="btn btn-success"onClick={this.saveContact} >Submit</button>&nbsp;
                       <button className="btn btn-danger" onClick={this.cancel.bind(this)}>Cancel</button>
                     </form> 
                     </div>
                  </div>
              </div>
            </div>
        )
    }
}

export default AddContact;