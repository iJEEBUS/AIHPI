import React, { Component } from 'react';

class HealthForm extends Component {
    constructor(props) {
        super(props);
    }

  render() {
      const data = this.props.data;
    return (
      <div className="HealthForm">
        <table border="1">
            <tr><td colspan ='3'>Chief Complaint</td></tr>
            <tr><td colspan ='3'>{data.chiefComplaint}</td></tr>
            <tr><td>Past Medical History</td><td>Past Surgical History</td><td>Social History</td></tr>
            <tr><td>{data.pastMedicalHistory1}</td><td>{data.pastSurgicalHistory1}</td><td>{data.pastSocialHistory1}</td></tr>
            {(data.pastMedicalHistory2!="none"||data.pastSurgicalHistory2!="none"||data.pastSocialHistory2!="none")?
                <tr><td>{data.pastMedicalHistory2!="none"?data.pastMedicalHistory2:null}</td>
                <td>{data.pastSurgicalHistory2!="none"?data.pastSurgicalHistory2:null}</td>
                <td>{data.pastSocialHistory2!="none"?data.pastSocialHistory2:null}</td></tr>
                :null
            }
            {(data.pastMedicalHistory3!="none"||data.pastSurgicalHistory3!="none"||data.pastSocialHistory3!="none")?
                <tr><td>{data.pastMedicalHistory3!="none"?data.pastMedicalHistory3:null}</td>
                <td>{data.pastSurgicalHistory3!="none"?data.pastSurgicalHistory3:null}</td>
                <td>{data.pastSocialHistory3!="none"?data.pastSocialHistory3:null}</td></tr>
                :null
            }
            <tr><td colspan="3">Family History</td></tr>
            <tr><td colspan="2">Mother: {data.mother}</td><td>Siblings: {data.siblings}</td></tr>
            <tr><td colspan="2">Father: {data.father}</td><td>Children: {data.children}</td></tr>
            <tr><td colspan ='2'>Medication</td><td>Dose / Frequency</td></tr>
            <tr><td colspan ='2'>{data.medication1}</td><td>{data.dose1}</td></tr>
            {(data.medication2!="none"||data.dose2!="none")?
                <tr><td colspan='2'>{data.medication2!="none"?data.medication2:null}</td>
                <td>{data.dose2!="none"?data.dose2:null}</td></tr>
                :null
            }
        </table>
      </div>
    );
  }
}
export default HealthForm;