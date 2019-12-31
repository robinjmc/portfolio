import React, {Component} from 'react';
import Item from './Item';
import Pagination from './Pagination';


import natours from '../reads/natours.md';
import fegbar from '../reads/fegbar.md';
import ncnews from '../reads/nc-news.md';
import omnifoods from '../reads/omnifoods.md';
import tetris from '../reads/tetris.md';
import lyallhakaraia from '../reads/lyallhakaraia.md';
import trillo from '../reads/trillo.md';
import nexter from '../reads/nexter.md';
import portfolio from '../reads/portfolio.md';

class Content extends Component {
    state = {
        loading: true, allSites: [], currentSite: {}, currentPage: null, totalPages: null 
    }

    componentDidMount() {
        this.setState({
            loading: false,
            allSites: [
                    { 
                        site: "https://robin-cunningham.herokuapp.com",
                        about: portfolio
                    },
                    { 
                        site: "https://shielded-brushlands-10812.herokuapp.com",
                        about: tetris
                    },
                    { 
                        site:  "https://lyallhakaraia.co.uk",
                        about: lyallhakaraia
                    },
                    { 
                        site: "https://natours-rc.herokuapp.com",
                        about: natours
                    },
                    { 
                        site: "https://nexter-rc.herokuapp.com",
                        about: nexter
                    },
                    { 
                        site: "https://trillo-rc.herokuapp.com",
                        about: trillo
                    },
                    { 
                        site: "https://omnifood-rc.herokuapp.com",
                        about: omnifoods
                    },
                    { 
                        site: "https://fegbar.herokuapp.com/whats-in-guv",
                        about: fegbar
                    },
                    { 
                        site: "https://rc-ncnews.herokuapp.com",
                        about: ncnews
                    }
                ]
        })
    }

    onPageChanged = data => {
      const { allSites } = this.state;
      const { currentPage, totalPages } = data;
      const offset = currentPage + 1;
      const [currentSite] = allSites.slice(currentPage, offset);
      this.setState({ currentPage, currentSite, totalPages });
    }

    render(){
        const { allSites, currentSite } = this.state;
        const totalCountries = allSites.length;
        if (totalCountries === 0) return null;
        return (
            <div className="Content">
                <Pagination totalRecords={totalCountries} pageLimit={1} pageNeighbours={1} onPageChanged={this.onPageChanged} />
                <Item content={currentSite}/>
            </div>            
        )
    }
}
export default Content;

