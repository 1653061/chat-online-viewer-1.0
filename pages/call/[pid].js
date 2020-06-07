import { useRouter } from 'next/router'
import CallPage from 'components/CallPage';
import Head from 'next/head'

const VideoCall = () => {
  const router = useRouter()
  const { pid, called, peerId } = router.query

  return <>
        <Head>
          <script src="https://unpkg.com/peerjs@1.2.0/dist/peerjs.min.js"></script>
        </Head>
        <CallPage pid={pid} called={called} peerId={peerId}/>
  </>
}

export default VideoCall