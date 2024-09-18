import React, { Component } from 'react';

class Form extends Component {
  constructor(props){
    super(props);
    this.state={
      studentId:"",
      studentName:"",
      age:0,
      sex:true,
      birthDate:"",
      birthPlace:"",
      address:"",
      actionName:""
    }
  }
  componentWillMount = ()=>{
    let {renderStudent, renderActionName} = this.props;
    if(renderActionName === "Save"){
      this.setState({
        actionName:renderActionName
      })
    }
    else{
      this.setState({
        studentId: renderStudent.studentId,
        studentName:renderStudent.studentName,
        age:renderStudent.age,
        sex:renderStudent.sex,
        birthDate:renderStudent.birthDate,
        birthPlace:renderStudent.birthPlace,
        address:renderStudent.address,
        actionName:renderActionName
      })
    }
  }
  componentWillReceiveProps = (nextProps)=>{
    let {renderStudent,renderActionName} =nextProps;
    if(renderActionName === "Save"){
      this.setState({
        actionName:renderActionName
      })
    }else{
        this.setState({
            studentId: renderStudent.studentId, 
            studentName: renderStudent.studentName,
            age:renderStudent.age,
            sex: renderStudent.sex, 
            birthDate: renderStudent.birthDate, 
            birthPlace: renderStudent.birthPlace, 
            address: renderStudent.address,
            actionName:renderActionName
        })
    }
}
  
  
  handleChange = (event1) =>{
    let name = event1.target.name;
    let value = event1.target.value;
    this.setState({
      [name]:value,
    })
  }
  handleSubmit = (event)=>{
    event.preventDefault();
    // thêm, sửa , xóa
    let student = {
        studentId: this.state.studentId,
        studentName: this.state.studentName,
        age:this.state.age,
        sex: this.state.sex,
        birthDate: this.state.birthDate,
        birthPlace: this.state.birthPlace,
        address: this.state.address,
    }
    // close
    this.props.onHandleSubmit(false, student, this.state.actionName);
  }
    render() {
      let {renderStudent, renderActionName} = this.props;
        return (
            <div>
            <form className="form-sample">
            <div className="form-group row">
              <label className="col-sm-3 col-form-label">Mã sinh viên</label>
              <div className="col-sm-9">
                <input type="text" name='studentId' className="form-control" value={this.state.studentId} onChange={this.handleChange}/>
              </div>
            </div>
            <div className="form-group row">
              <label className="col-sm-3 col-form-label">Tên sinh viên</label>
              <div className="col-sm-9">
                <input type="text" className="form-control" name='studentName' value={this.state.studentName} onChange={this.handleChange}/>
              </div>
            </div>
            <div className="form-group row">
              <label className="col-sm-3 col-form-label" >Tuổi</label>
              <div className="col-sm-9">
                <input value={this.state.age} name='age' type="text" className="form-control" onChange={this.handleChange}/>
              </div>
            </div>
            <div className="form-group row">
              <label className="col-sm-3 col-form-label">Giới tính</label>
              <div className="col-sm-9">
                <select className="form-control" value={this.state.sex} name='sex' onChange={this.handleChange}>
                  <option>Nam</option>
                  <option>Nữ</option>
                </select>
              </div>
            </div>
            <div className="form-group row">
              <label className="col-sm-3 col-form-label">Ngày sinh</label>
              <div className="col-sm-9">
                <input className="form-control" placeholder="dd/mm/yyyy" value={this.state.birthDate} name='birthDate' onChange={this.handleChange}/>
              </div>
            </div>
            <div className="form-group row">
              <label className="col-sm-3 col-form-label">Nơi sinh</label>
              <div className="col-sm-9">
                <select className="form-control" value={this.state.birthPlace} name='birthPlace' onChange={this.handleChange}>
                  <option value={"HN"}>Hà Nội</option>
                  <option value={"HCM"}>TP. Hồ Chí Minh</option>
                  <option value={"ĐN"}>Đà Nẵng</option>
                  <option value={"QN"}>Quảng Ninh</option>
                </select>
              </div>
            </div>
            <div className="form-group row">
              <label className="col-sm-3 col-form-label">Địa chỉ</label>
              <div className="col-sm-9">
                <textarea className="form-control" name='address' value={this.state.address} onChange={this.handleChange} />
              </div>
            </div>
            <button type="submit" className="btn btn-primary me-2" onClick={(event1)=>this.handleSubmit(event1)} >
              {renderActionName}
            </button>
          </form>
            </div>
        );
    }
}

export default Form;