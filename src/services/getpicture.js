import axios from "axios"

const BASE_URL = 'https://pixabay.com/api/'
const API_KEY = '33569562-dd32e440d8f662096afc537ab'

export const getDataImg = async (searchText) => {
    let dataRequest = searchText
    console.log(dataRequest)
    const response = await axios.get(`${BASE_URL}?key=${API_KEY}&q=${dataRequest}&per_page=12&page=1&image_type=photo&orientation=horizontal`)
    const response_1 = await response.json()
    return console.log('picture :>> ', response)
}

// export const getDataImg {
//     constructor() {
//     this.queryPage = 1;
//     this.searchQuery = '';
//     this.perPage = 12;
//     this.lastSearchQuery = '';
//     this.orientation = 'horizontal';
//     this.image_type = 'photo';
//     this.safesearch = true;
//     }
//     async responseToRequest(searchText) {

//         try {
//             const responce = await axios.get(
//                 `${BASE_URL}/?key=${API_KEY}&q=${searchText}&per_page=${this.perPage}&page=${this.queryPage}&image_type=${this.image_type}&orientation=${this.orientation}&safesearch=${this.safesearch}`);
//             console.log(searchText)
//             console.log(responce);

//             this.queryPage += 1;

//             return responce.data
//         }
//         catch (error) {
//             console.log(error)
//         }
//     }

//     resetQueryPage() {
//     this.queryPage = 1;
//   }
// };


//   async const getDataImg = (searchText) => {
//     let limitData;
//     let per_page = 12;
//     const { loading, page, galery } = this.state;
//     const { searchValue, isLoading } = this.props;

//     this.setState({ loading: true });
//     this.setState({ button: false });
//     isLoading(!loading);
//     const BASE_URL = 'https://pixabay.com/api/';
//     const PARAMS = {
//       params: {
//         key: '33569562-dd32e440d8f662096afc537ab',
//         q: `${searchValue}`,
//         image_type: 'photo',
//         orientation: 'horizontal',
//         safesearch: 'true',
//         page: `${page}`,
//         per_page: `${per_page}`,
//       },
//     };
//     try {
//       const response = await axios.get(BASE_URL, PARAMS);
//       const data = response.data.hits;
//       limitData = response.data.totalHits;
//       if(data.length === 0){
//         toast.error('Image or photo not found!');
//       }
//       this.setState(prevState => ({
//         galery: [...prevState.galery, ...data],
//       }));
//     } catch (error) {
//       toast.error('Oops, something went wrong!');
//       this.setState({ button: true });
//     } finally {
//       this.setState({ loading: false });
//       isLoading(!this.state.loading);
//       if (limitData <= galery.length + per_page) {
//         this.setState({ button: false });
//       } else {
//         this.setState({ button: true });
//       }
//     }
// }