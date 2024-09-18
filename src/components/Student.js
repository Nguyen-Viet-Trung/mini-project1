import React, { Component } from 'react';

class Student extends Component {
  constructor(props){
    super(props);
  }
  handleViewOrEdit = (student,actionname) =>{
    console.log("Student view click: ")
    this.props.onHandleViewOrEdit(true,student,actionname);
  }
  handleDelete = (studentId) =>{
    if(window.confirm("Bạn có muốn xóa không")){
      this.props.onHandleDelete(studentId);
    }
      
  }  
  render() {
      let {key, renderStudent, stt} = this.props;
      console.log(renderStudent.GioiTinh)
        return (
            <>
                <tr>
                <td>{stt}</td>
                <td>{renderStudent.studentId}</td>
                <td>{renderStudent.studentName}</td>
                <td>{renderStudent.age}</td>
                <td>
                    {renderStudent.sex === true? "Nam" : "Nữ"}
                </td>
                  <td>
                    <div className="template-demo">
                      <button
                        type="button"
                        className="btn btn-danger btn-icon-text"
                        onClick={()=>this.handleViewOrEdit(renderStudent, "Close")}
                      >
                        Xem
                      </button>
                      <button
                        type="button"
                        className="btn btn-warning btn-icon-text"
                        onClick={()=>this.handleViewOrEdit(renderStudent, "Update")}
                      >
                        Sửa
                      </button>
                      <button
                        type="button"
                        className="btn btn-success btn-icon-text"
                        onClick={()=>this.handleDelete(renderStudent.studentId,"Delete")}
                      >
                        Xóa
                      </button>
                    </div>
                  </td>
                </tr>
                
                </>
        );
    }
}

export default Student;