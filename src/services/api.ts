import axios from 'axios';

const options:any = {
    method: 'GET',
    url: 'https://imdb8.p.rapidapi.com/auto-complete',
    params: { q: 'game of thr' },
    headers: {
        'x-rapidapi-host': 'imdb8.p.rapidapi.com',
        'x-rapidapi-key': 'cc266a0427mshd9e7212b26ddaaap132c5cjsneb867e46944f'
    }
};

axios.request(options).then(function (response: any) {
    console.log(response.data);
}).catch(function (error: any) {
    console.error(error);
});