import React,{Component} from 'react';
import axios from 'axios';
import UpdateContact from "./UpdateContact";

class ContactList extends React.Component{
    constructor(){
        super()

        this.state = {
            contacts : []
        }

        this.addContact = this.addContact.bind(this);
        this.updateContact = this.updateContact.bind(this);
        this.deleteContact = this.deleteContact.bind(this);
    };

    deleteContact(contactId){
        alert("deleteContact" + contactId);
        axios.delete('http://localhost:8080/contact/deleteContact/'+contactId).
              then((posRes)=>{
                  if(posRes!=null){
                   this.setState({
                      contacts : this.state.contacts.filter(contact => contact.contactId !== contactId)
                   }) 
                }   
              },
              (errRes)=>{
                  alert(errRes);
              })
    }

   updateContact(contactId){
       this.props.history.push(`/updateContact/${contactId}`);
    }

    componentDidMount(){
         axios.get("http://localhost:8080/contact/getAllContacts").
               then((posRes)=>{
                 this.setState({
                     contacts : posRes.data
                 })
               },(errorRes)=>{
                  alert(errorRes);
               })
    };

    addContact(){
        this.props.history.push("/addContact");
    }

    render(){
        return(
            <div>
                <h2 className="text-center">ContactList</h2>
                <div className="row">
                    <button className="btn btn-primary" onClick={this.addContact}>Add Contact</button>
                </div>
                <div className="row"> 
                    <table className ='table table-bordered table-striped'>
                      <thead  className='bg-info text-danger'>
                      <tr>
                      <td>S.no</td>
                      <td>Contact Id</td>
                      <td>Contact Name</td>
                      <td>Contact Number</td>
                      <td>Actions</td>
                      </tr>
                      </thead>
                      <tbody>
                        {this.state.contacts.map((elements,index)=>(
                             <tr>
                                 <td>{index+1}</td>
                                 <td>{elements.contactId}</td>
                                 <td>{elements.contactName}</td>
                                 <td>{elements.contactNumber}</td>
                                 <td>
                                     <button className="btn btn-success" onClick={()=>{this.updateContact(elements.contactId)}}>Edit</button> &nbsp;&nbsp;
                                     <button className="btn btn-danger" onClick={()=>{this.deleteContact(elements.contactId)}}>Delete</button>
                                 </td>
                             </tr>
                        ))}
                      </tbody>
                    </table>
                </div>
            </div>
        )
    }
    
}

export default ContactList;