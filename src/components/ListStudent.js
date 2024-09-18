import React, { Component } from 'react';
import Student from './Student';

class ListStudent extends Component {
    constructor(props){
        super(props);  
    }
    handleViewOrEdit=(toggle,student,actionname)=>{
        console.log("List student view: ")
        this.props.onHandleViewOrEdit(toggle,student,actionname)
    }
    handleDelete = (studentId) => {
        this.props.onHandleDelete(studentId);
    }
    render() {
        let { renderStudents} = this.props;
        let render = renderStudents.map((student, index) =>{
        return(
            <Student key = {index} renderStudent={student} stt = {index + 1}
            onHandleViewOrEdit={this.handleViewOrEdit}
            onHandleDelete = {this.handleDelete}></Student>
        )
        }
    )
        return (
            <div className="card-body">
            <h3 className="card-title">Danh sách sinh viên</h3>
            <div className="table-responsive pt-3">
            <table className="table table-bordered">
              <thead>
                <tr>
                  <th>Số thứ tự</th>
                  <th>Mã sinh viên</th>
                  <th>Tên sinh viên</th>
                  <th>Tuổi</th>
                  <th>Giới tính</th>
                  <th>Hành động</th>
                </tr>
              </thead>
              <tbody>
                  {render}
                </tbody>  
            </table>
            </div>
            </div>
        );
    }
}

export default ListStudent;