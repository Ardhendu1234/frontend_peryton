import { Tilt } from 'react-tilt'

const Demo = () => {
  return (
    <section className='h-[50vw] w-[100vw] flex flex-col items-center justify-center'>
      <h2 className="mb-10 text-2xl font-bold text-black">
        Parralax effect
      </h2>
      <Tilt
        className="flex h-[300px] w-[300px] content-center items-center justify-center rounded-xl bg-gradient-to-r from-violet-500 to-fuchsia-500"
        style={{
          boxShadow: '0 48px 60px 0 rgba(2,14,26,.24)',
          transformStyle: 'preserve-3d',
        }} 
      >
        <div style={{
          transform: 'translateZ(60px)',
        }}>
          <span className="text-9xl" role="img" aria-label="alien">👽</span>
        </div>
      </Tilt>
    </section>
  )
}

export default Demo