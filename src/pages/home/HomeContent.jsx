import SkillsList from '../../components/SkillsList'
import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react';
import FaqBlur from '../../bgblurs/FaqBlur';
import { FaArrowRightLong } from 'react-icons/fa6'
import { FaPlus } from 'react-icons/fa6';

const HomeContent = ({ maxSm, minXl }) => {
  const [faqSelection, setFaqSelection] = useState(null)

  const faq = [
    { q: 'How do I join Gator Gaming?',
      a: "Simply come to any of our events! There’s no membership application and no strings attached to your membership; just show up and stay for as long as you’d like! Membership is open to all UF students, but we welcome anyone into our community! Join our Discord for more!",
      i: 1
    },
    { q: 'What events does Gator Gaming host?',
      a: "Gator Gaming hosts a large assortment of events every semester, including weekly GBMs, socials, and a biannual tournament GatorLAN!",
      i: 2
    },
    { q: 'Do I need to be a UF student for GatorLAN?',
      a: 'Not at all!  Anyone can come as long as they attend the event and obtain a wristband at the registration desk. Bring your friends!',
      i: 3
    }
  ]

  const plusSpin = {
    open: {opacity: 1, rotate: 45},
    closed: {opacity: 1, rotate: 0}
  }

  const faqItemVariants = {
    open: {
      height: 'auto',
      opacity: 1,
      transition: {
        height: {duration: 0.3},
        opacity: {duration: 0.6}
      }
    },
    closed: {
      height: 0,
      opacity: 0,
      transition: {
        height: {duration: 0.3},
        opacity: {duration: 0.1}
      }
    }
  }

  return (
    <>
      <div className='relative justify-center flex z-2'>
        <div className='md:grid md:grid-cols-2 md:grid-rows-[1fr_1fr] md:gap-x-15 lg:gap-y-10 md:w-180 lg:w-215 xl:w-250 2xl:w-332'>
          <div className='w-[85%] md:w-auto m-auto lg:m-0 place-self-center xl:mt-4 xl:place-self-stretch flex flex-col gap-8 h-fit'>
            <img 
              className='aspect-auto z-2'
              src='home/home-players.webp'
              alt='Members gaming'
            />
          </div>
          <div className='w-3/4 md:w-auto m-auto text-center md:text-left items-center md:items-start xl:pl-10 md:justify-center flex flex-col'>
            {!maxSm && <p className='text-lg xl:text-xl pb-3 text-ggwhite font-display scroll-m-30' id='about-start'>Who are we?</p>}
            <p className='pt-8 md:pt-0 text-2xl xl:text-3xl pb-2 font-semibold text-ggwhite font-display'>UF's Premier Gaming Club</p>
            <p className='text-md xl:text-lg text-ggwhite font-display'>Gator Gaming is a student organization dedicated to nurtuing the gaming community here at UF. Whether you’re into competitive gaming or simply enjoy a casual game from time to time, everyone is welcome!</p>
            <div className='flex gap-5 pt-8 font-display'>
              <a
                href='/events/'
                rel='noopener noreferrer'
                className='z-3 flex justify-between w-fit px-5 h-10 items-center bg-ggorange text-ggwhite rounded-3xl darken'
              >Events
                <div className='flex items-center justify-center rounded-full bg-ggbg h-8 w-8 transform translate-x-4'>
                  <FaArrowRightLong className='text-lg' />
                </div>
              </a>
            </div>
          </div>
          {!maxSm && // disabled when width < 768px
            <div className='pl-6 2xl:-mt-0 xl:pl-6'>
              <p className='pb-2 text-2xl xl:text-3xl text-ggwhite font-display'>
              Our Skills
              </p>
              <p className='w-[95%] pb-2 text-md text-ggorange font-display'>
                Gator Gaming hosts a wide variety of events that are open to all UF students!
              </p>
              <SkillsList/>
            </div>
          }
          <div className='px-8 pt-6 mt-8 md:px-0 md:pt-0 lg:mt-0 flex flex-row text-center'>
            <div className='pr-0 xl:pr-5 w-1/2 flex flex-col text-ggwhite font-display'>
              <p className='text-xl xl:text-2xl text-ggwhite font-display'>
                Community
              </p>
              <p className='text-sm xl:text-md px-5 pb-17 text-ggorange font-display'>
                A space where friendships are formed, online and off.
              </p>
              <p className='text-xl xl:text-2xl text-ggwhite font-display'>
                Competition
              </p>
              <p className='text-sm xl:text-md px-5 text-ggorange font-display'>
                We offer intense tournaments to friendly matches and everything in between.
              </p>
            </div>
            <div className='w-1/2 pr-0 xl:pl-5 flex flex-col text-ggwhite font-display'>
              <p className='text-xl xl:text-2xl text-ggwhite font-display'>
                Collaboration
              </p>
              <p className='text-sm xl:text-md px-5 pb-12 text-ggorange font-display'>
                Teamwork makes the dream work, we are always open to new ideas and input.
              </p>
              <p className='text-xl xl:text-2xl text-ggwhite font-display'>
                Opportunity
              </p>
              <p className='text-sm xl:text-md px-5 text-ggorange font-display'>
                We are always looking for new leaders, through volunteering, apprenticeships, and more!
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* start of faq section */}
      <div className='relative mb-50 lg:mb-0 w-screen lg:h-[80vh] xl:h-[89vh] flex justify-center'>
        <FaqBlur/>
        <div className='xl:gap-35 h-fit gap-10 w-full md:w-180 lg:w-215 xl:w-250 2xl:w-332 flex text-center z-2'>
          <div className='px-10 pt-35 md:px-5 w-full xl:w-1/2'>
            <p className='pb-8 text-2xl sm:text-3xl lg:text-4xl font-display z-2 text-ggwhite font-bold'>FAQ</p>
              {faq.map((question) => (
                <div className='pb-3' key={question.i}>
                  <div 
                    className='flex hover:cursor-pointer select-none items-center gap-5 pb-3'
                    onClick={faqSelection === question.i ? () => setFaqSelection(null) : () => setFaqSelection(question.i)} 
                    key={question.i}
                  >
                    <motion.div
                      initial='closed'
                      animate={faqSelection === question.i ? 'open' : 'closed'}
                      exit='closed'
                      variants={plusSpin}
                      transition={{
                        type: 'spring',
                        bounce: 0,
                        duration: 0.6
                      }}
                    >
                      <FaPlus size='24'/>
                    </motion.div>
                    <p className='text-[15px] sm:text-lg text-ggwhite font-display'>{question.q}</p>
                  </div>
                  <AnimatePresence>
                    {faqSelection === question.i && (
                      <motion.div
                        key={question.i}
                        initial='closed'
                        animate='open'
                        exit='closed'
                        variants={faqItemVariants}
                        className='text-left text-sm sm:text-base text-ggwhite font-display'
                      >
                        <div className='pb-4'>
                          {question.a}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                  <div className='h-[1px] bg-ggwhite' />
                </div>
              ))}
          </div>
          {minXl &&
          <div className='w-fit pt-28'>
            <img 
              className='rounded-2xl aspect-auto z-2'
              src='home/faq-image.webp'
              alt='Club members'
            />
          </div>
          }
        </div>
      </div>
    </>
  )
}

export default HomeContent