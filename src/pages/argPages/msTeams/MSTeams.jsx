import Card from '../../../components/cards/Card'
import SmallCard from '../../../components/cards/SmallCard'
import { motion } from 'framer-motion'
import SimpleBar from 'simplebar-react'
import 'simplebar-react/dist/simplebar.min.css'
import { Splide, SplideSlide } from '@splidejs/react-splide';
import { AutoScroll } from '@splidejs/splide-extension-auto-scroll';
import '@splidejs/react-splide/css';
import { useDrag } from '@use-gesture/react'
import { useRef } from 'react'
import Comment from '../../../components/Comments'


const MSTeams = () => {
  const mainScrollRef = useRef(null)

  const officers = [//enillMed
    {name: 'Matthw Grimaldi', picture: 'arg/people/matthew.png', position: 'Victim', aboutMe: "If only he had more time"},
    {name: 'Edwin Cheug', picture: 'arg/people/edwin.jpg', position: 'Usurper', aboutMe: 'He\'d do anything to become president'},
    {name: 'Kaden Joy', picture: 'arg/people/trapped.jpg', position: 'Meaningless', aboutMe: "There is nothing for you here"},
    {name: 'Zack Philips', picture: 'arg/people/zack.jpg', position: 'Betrayer', aboutMe: 'He\'ll never have to share again'},
    {name: 'Noah Ilick', picture: 'arg/people/noah.jpg', position: 'Traitor', aboutMe: ''},
    {name: 'Majo Perez olina', picture: 'arg/people/majo.jpg', position: 'Conspirator', aboutMe: ''},
    {name: 'Emme Shpherd', picture: 'arg/people/emme.gif', position: 'Innocent', aboutMe: 'Never another GatorLAN graphic'},
    {name: 'Jaen Neri', picture: 'arg/people/jaden.png', position: 'Deranged', aboutMe: ''}
  ]

  const main = useDrag(({ delta: [dx] }) => {
    if (mainScrollRef.current) {
      const mainScrollElement = mainScrollRef.current.getScrollElement()
      if (mainScrollElement) {
        mainScrollElement.scrollLeft -= dx
      }
    }
  })

  return (
    <div className='relative pt-30 lg:pb-70 flex flex-col items-center w-screen min-h-screen bg-[url(/arg/images/bg_teams.gif)]'>
      <div>
        <p className='relative text-4xl text-ggwhite font-display pb-2'>Meet your officers!</p>
        <Comment comments={["/", "M", "E", "E"]}/>
        <div className='relative'>
          <SimpleBar autoHide={false} scrollbarMaxSize={700} className='pt-8 h-124 w-screen lg:w-265 max-w-265' ref={mainScrollRef}>
            <motion.div 
              initial={{ x: 0 }}
              animate={{ x: [0, -130, 0] }}
              transition={{
                duration: 1,
                delay: 0.5
              }}
              className='relative px-10 lg:px-5 flex gap-x-15 w-fit select-none cursor-grab active:cursor-grabbing'
              {...main()}
            >
              {officers.map((officer, index) => {
                return (
                  <Card
                    name={officer.name}
                    position={officer.position}
                    picture={officer.picture}
                    aboutMe={officer.aboutMe}
                    key={index}
                  />
              )})}
            </motion.div>
          </SimpleBar>
          <Comment comments={["T", "I", "N", "G", "S"]}/>
          <div className='absolute left-0 top-8 h-105 w-6 bg-[linear-gradient(90deg,rgba(10,14,21,1)_0%,rgba(0,0,0,0)_100%)] pointer-events-none z-2'></div>
          <div className='absolute right-0 top-8 h-105 w-10 bg-[linear-gradient(270deg,rgba(10,14,21,1)_0%,rgba(0,0,0,0)_100%)] pointer-events-none z-2'></div>
        </div>
      </div>
    </div>
  )
}

export default MSTeams