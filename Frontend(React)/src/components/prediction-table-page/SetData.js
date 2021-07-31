import axios from 'axios'

function setData(date) {
    axios.get("http://127.0.0.1:8000/predictions/all/date/" + date + "/").then((response) =>{this.setState({data: response.data})})
}

export default setData
