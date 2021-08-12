import React from 'react'
import HomePageNavbar from "../navbars/HomePageNavbar"
import "./UploadPage.css"
import axios from 'axios'
import Papa from 'papaparse'


class CsvUploadPage extends React.Component{
    constructor() {
        super()
        this.state = {
            file: undefined
        }
        this.updateData = this.updateData.bind(this)
    }
    

    importCSV = () => {
        const { file } = this.state;
        Papa.parse(file, {
          complete: this.updateData,
          header: true
        });
        
    };
    
    updateData(result) {
        var data = result.data;
        axios.post('http://127.0.0.1:8000/transactions/all/', data)
        console.log(data);
      }

    handleChange = event => {
        this.setState({file: event.target.files[0]})
    }

    handleUpload() {
        
        //console.log(this.state.file)

        //axios.post('http://127.0.0.1:8000/transactions/all/', files)
        
    }
    
    render () {
        
        return (
            <div className="csv_upload_page">                
                <HomePageNavbar />
                <div  className="wrap_box">
                    <div id="deco_line_one"/>
                    <div id="deco_line_two"/>
                    <h1 className="import_txt">Іморпутуйте свої таблиці сюди</h1>
                    <label htmlFor="upload_btn">Вибрати ссв файл </label>
                    <input type="file" name="file" className="hide" id="upload_btn" accept=".csv" onChange={this.handleChange} />
                    <button type="button" onClick={this.importCSV}>Загрузити</button>
                 </div>            
            </div>
        )
    }
}

export default CsvUploadPage