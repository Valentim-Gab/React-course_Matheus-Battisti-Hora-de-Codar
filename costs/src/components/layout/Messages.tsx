import React, { useEffect, useState } from 'react'
import styles from './Messages.module.css'

interface MessageProps {
  type: string,
  msg: string
}

export const Messages: React.FC<MessageProps> = ({type, msg}) => {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    if (!msg) {
      setVisible(false)

      return
    }

    setVisible(true)

    const timer = setTimeout(() => {
      setVisible(false)
    }, 3000)

    return () => clearTimeout(timer)
  }, [msg])

  return (<>
    {visible && (
      <div className={`${styles.message} ${styles[type]}`}>
        {msg}
      </div>
    )}
  </>)
}