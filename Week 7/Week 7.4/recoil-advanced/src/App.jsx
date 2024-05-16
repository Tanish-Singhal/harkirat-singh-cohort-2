import { useMemo, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { RecoilRoot, useRecoilState, useRecoilValue } from 'recoil'
import { jobsAtom, notificationAtom, messageAtom, networkAtom, totalNotificationSelector } from './atoms'

function App() {
  return (
    <RecoilRoot>
      <MainApp />
    </RecoilRoot>
  )
}

function MainApp() {
  const networkNotificationCount = useRecoilValue(networkAtom);
  const jobNotificationCount = useRecoilValue(jobsAtom);
  const notificationCount = useRecoilValue(notificationAtom);
  const [messageNotificationCount, setMessageNotificationCount] = useRecoilState(messageAtom);

  // if you want to print the sum of all the notification count in the Me button
  // const totalNotificationCount = useMemo(() => {
  //   return networkNotificationCount + jobNotificationCount + notificationCount + messageNotificationCount;
  // }, [networkNotificationCount, jobNotificationCount, messageNotificationCount, networkNotificationCount])
  
  // FIXME: we can also do the same thing using Selector (with better approach)
  const totalNotificationCount = useRecoilValue(totalNotificationSelector);

  return (
    <>
      <button>Home</button>

      <button>Network ({networkNotificationCount >= 100 ? "99+" : networkNotificationCount})</button>
      <button>Jobs ({jobNotificationCount >= 100 ? "99+" : jobNotificationCount})</button>
      <button>Notifiction ({notificationCount >= 100 ? "99+" : notificationCount})</button>
      <button>Message ({messageNotificationCount >= 100 ? "99+" : messageNotificationCount})</button>

      {/* <button onClick={() => {
        setMessageNotificationCount(messageNotificationCount + 1);
      }}>Me ({totalNotificationCount})</button> */}
      <button>Me ({totalNotificationCount})</button>
    </>
  )
}

export default App
