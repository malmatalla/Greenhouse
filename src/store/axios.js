import axios from 'axios'; 

const instance = axios.create({
	//baseURL: 'https://cors-anywhere.herokuapp.com/https://boot.cqrify.com:9943/'
	//baseURL: 'https://cloudtest.cqrify.com:9943'
	baseURL: 'https://nova.cqrify.com:9943'
})

export default instance; 