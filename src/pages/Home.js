import React, { useState } from 'react'
// import { Link } from 'react-router-dom'
import './Home.css'
import { Logo } from '../images/Netflix'
import { ConnectButton, Icon, TabList, Tab, Button, Modal } from 'web3uikit'
import { movies } from '../helpers/library'

const Home = () => {
  const [visible, setVisible] = useState(false)
  const [selectedFilm, setSelectedFilm] = useState()
  return (
    <>
      <div className='logo'>
        <Logo />
      </div>
      <div className='connect'>
        <Icon fill='#e32636' size={24} svg='bell' />
        <ConnectButton />
      </div>
      <div className='topBanner'>
        <TabList defaulActiveKey={1} tabStyle='bar'>
          <Tab tabKey={1} tabName={'Movies'}>
            <div className='scene'>
              <img
                src={movies[6].Scene}
                className='sceneImg'
                alt='sceneImg'
                key='sceneImg'
              ></img>
              <img
                src={movies[6].Logo}
                className='sceneLogo'
                alt='sceneLogo'
                key='sceneLogo'
              ></img>
              <p className='sceneDesc'>{movies[0].Description}</p>
              <div className='playButton'>
                <Button
                  icon='chevronRightX2'
                  text='Play'
                  theme='secondary'
                  type='button'
                />
                <Button
                  icon='plus'
                  text='Add to My List'
                  theme='translucent'
                  type='button'
                />
              </div>
            </div>

            <div className='title'>Movies</div>
            <div className='thumbs'>
              {movies &&
                movies.map((e, index) => {
                  return (
                    <img
                      src={e.Thumnbnail}
                      className='thumbnail'
                      alt='thumbnail'
                      key={index}
                      onClick={() => {
                        setSelectedFilm(e)
                        return setVisible(true)
                      }}
                    ></img>
                  )
                })}
            </div>
          </Tab>
          <Tab tabKey={2} tabName={'Series'}></Tab>
          <Tab tabKey={3} tabName={'MyList'}></Tab>
        </TabList>
        {selectedFilm && (
          <div className='modal'>
            <Modal
              onCloseButtonPressed={() => {
                setVisible(false)
                setSelectedFilm()
              }}
              isVisible={visible}
              hasFooter={false}
              width='1000px'
            >
              <div className='modalContent'>
                <img
                  src={selectedFilm.Scene}
                  className='modalImg'
                  alt='modalImg'
                  key='modalImg'
                ></img>
                <img
                  src={selectedFilm.Logo}
                  className='modalLogo'
                  alt='modalLogo'
                  key='modalLogo'
                ></img>
                <div className='modalPlayButton'>
                  <Button
                    icon='chevronRightX2'
                    text='Play'
                    theme='secondary'
                    type='button'
                  />
                  <Button
                    icon='plus'
                    text='Add to My List'
                    theme='translucent'
                    type='button'
                  />
                </div>
              </div>
            </Modal>
          </div>
        )}
      </div>
    </>
  )
}

export default Home
