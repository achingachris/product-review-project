import Card from 'react-bootstrap/Card'
import CardGroup from 'react-bootstrap/CardGroup'

const Home = () => {
  return (
    <CardGroup>
      <Card>
        <Card.Img
          variant='top'
          src='https://www.cityhub.co.ke/img/products/368/Samsung-Galaxy-A32.png'
        />
        <Card.Body>
          <Card.Title>SAMSUNG A32</Card.Title>
          <Card.Text>
            The Samsung Galaxy A32 will feature the MediaTek Helio G80 (12 nm)
            chipset which is built for great gaming. The operating system is
            Android 11. Packed with 6 GB it will give you exceptional
            performance and the 128 GB storage is just enough to store your data
            plus an additional external space of 512 GB. The Frame Booster gives
            graphics smooth, life-like motion while the game booster helps
            optimize the battery, temperature, and memory by learning your usage
            patterns.
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className='text-muted'>Last updated 3 mins ago</small>
        </Card.Footer>
      </Card>
      <Card>
        <Card.Img
          variant='top'
          src='https://images.macrumors.com/t/aP8Oqdj728OAdXSv1XqIykrtLHM=/800x0/smart/article-new/2021/09/iphone-14-and-iphone-14-plus.jpg?lossy'
        />
        <Card.Body>
          <Card.Title>Iphone14</Card.Title>
          <Card.Text>
            Apple's iPhone 14 models are identical in design to the iPhone 13
            models, featuring flat edges, an aerospace-grade aluminum enclosure,
            and a glass back that enables wireless charging. The iPhone 14
            models come in blue, purple, midnight, starlight, and (PRODUCT)RED.{' '}
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className='text-muted'>Last updated 3 mins ago</small>
        </Card.Footer>
      </Card>
      <Card>
        <Card.Img
          variant='top'
          src='https://www.mascomintl.com/themes/images/mascom/Tecno%20Camon%2019%20Eco%20Black%20Mascom%20International.jpg'
        />
        <Card.Body>
          <Card.Title>Tecno cammon 19</Card.Title>
          <Card.Text>
            Tecno Camon 19 Pro Android smartphone. Announced Jun 2022. Features
            6.8″ display, MT6781 Helio G96 chipset, 5000 mAh battery, 256 GB
            storage, 8 GB RAM
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className='text-muted'>Last updated 3 mins ago</small>
        </Card.Footer>
      </Card>
    </CardGroup>
  )
}

export default Home
