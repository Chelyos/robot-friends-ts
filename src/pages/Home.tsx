import React from 'react'
import SearchBox from '../components/searchBox/SearchBox'
import CardList from '../components/cardList/CardList'

export default function Home() {
    return (
        <div className='tc'>
        <h1 className='f1'>RoboFriends</h1>
        <SearchBox/>
        <div className='flex-cardlist'>
          <CardList/>
        </div>
      </div>
    )
}
