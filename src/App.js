import logo from './logo.svg';
import './App.css';
import Title from './components/Title';
import Form from './components/Form';
import ListStudent from './components/ListStudent';
import { Component } from 'react';

class App extends Component{
  constructor(props){
    super(props);  
    this.state ={
    listStudent: [
      { studentId: "SV001", studentName: "Nguyễn Văn A", age: 20, sex: true, birthDate: "2002-04-23", birthPlace: "HN", address: "25, Vũ Ngọc Phan" },
      { studentId: "SV002", studentName: "Nguyễn Văn B", age: 21, sex: false, birthDate: "2001-09-09", birthPlace: "ĐN", address: "1, Ngô Quyền" },
      { studentId: "SV003", studentName: "Nguyễn Văn C", age: 19, sex: true, birthDate: "2003-07-07", birthPlace: "QN", address: "1, Lý Tự Trọng" },
      { studentId: "SV004", studentName: "Nguyễn Văn D", age: 29, sex: false, birthDate: "2005-07-07", birthPlace: "HCM", address: "1, Lý Tự Trọng" },
    ], 
    isToggle: false, //ẩn hiện form
    student:"",
    actionName:""
  }
  }
  handleAdd = (args, actionname) => {
    
    this.setState({
      isToggle: args,
      actionName:actionname
    })
  }
  handleSubmit = (toggle, student, actionname) =>{
    console.log("Form submit: ",toggle+","+student+","+actionname)
    let ListStudent = this.state.listStudent
    if(actionname === "Update"){
      for(let i = 0; i < ListStudent.length;i++){
        if(ListStudent[i].studentId === student.studentId){
          ListStudent[i] = student;
          break;
        }
      }
      this.setState({
        listStudent : ListStudent
      })
    }
    if(actionname === "Save"){
      ListStudent.push(student)
      this.setState({
        listStudent : ListStudent
      })
    }
    this.setState({
      isToggle: toggle
    })
  }
  handleViewOrEdit = (toggle, student, actionname) =>{
    console.log("Action view: ",toggle)
    this.setState({
      isToggle:toggle,
      actionName:actionname
    })
    this.setState({
      student:student
    })
  }
  handleDelete = (studentId) =>{
    let {listStudent} = this.state;
    listStudent = listStudent.filter((item) => item.studentId !== studentId);
    this.setState({
      listStudent:listStudent
    })
  }
  handleSearch = (keyword) =>{
    this.setState({
      keyword:keyword
    })
  }
  render(){
    //let {listStudent} = this.state;
    let lstStudent = this.state.listStudent;
    lstStudent = lstStudent.filter((item) => item.studentName.includes(this.state.keyword));
    let elementForm = this.state.isToggle === true ? <Form
    renderActionName={this.state.actionName}
    renderStudent = {this.state.student}
    onHandleSubmit={this.handleSubmit}/> :"";
  return (
  <div className="row">
    <div className="col-lg-7 grid-margin stretch-card">
      <div className="card">
        <Title 
        onHandleAdd ={this.handleAdd}
        onHandleSearch={this.handleSearch}
        ></Title>
        
        <ListStudent 
          renderStudents = {lstStudent}
          onHandleViewOrEdit={this.handleViewOrEdit}
          onHandleDelete={this.handleDelete}
          ></ListStudent>{/* Use the correct prop */}
      </div>
    </div>
    <div className="col-5 grid-margin">
      <div className="card">
        <div className="card-body">
          <h3 className="card-title">Thông tin sinh viên</h3>
          {elementForm}
        </div>
      </div>
    </div>
  </div>
  );
}
}
export default App;
