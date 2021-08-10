import React from 'react'
import HomePageNavbar from "../navbars/HomePageNavbar"
import "./UploadPage.css"
import axios from 'axios'

class CsvUploadPage extends React.Component{

    state = {
        file: null
    }

    handleFile(e) {
        let file = e.target.files[0]
        this.setState({file: file})
    }

    handleUpload() {
        let file = this.state.file;
        let formdata = new FormData();
        formdata.append('csv_file', file)
        axios({
            method: 'post',
            url: '/some/api',
            data: formdata
            
        }).then()
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
                    <input type="file" name="file" className="hide" id="upload_btn" accept=".csv" onChange={(e)=>this.handleFile(e)} />
                    <button type="button" onClick={(e)=>this.handleUpload(e)}>Загрузити</button>
                 </div>            
            </div>
        )
    }
}

export default CsvUploadPage