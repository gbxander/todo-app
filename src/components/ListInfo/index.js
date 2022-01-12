import React, {useState} from 'react'
import { Input } from 'antd'

const { TextArea } = Input

const ListInfo = ({ handleSetTitle, handleSetDescription}) => {
    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")

    return (
        <div className='description-wrapper'>
          <Input
            id='title'
            placeholder='Title'
            value={title}
            onChange={(e) => setTitle(e.currentTarget.value)}
            onPressEnter={() => handleSetTitle(title)}
            onBlur={() => handleSetTitle(title)}
            autoFocus
          />
          <br />
          <TextArea
            id='description'
            placeholder='Description (Optional)'
            value={description}
            onChange={(e) => setDescription(e.currentTarget.value)}
            rows={1}
            autosize={{ minRows: 1, maxRows: 6 }}
            onBlur={() => handleSetDescription(description)}
          />
        </div>
      )
}


export default ListInfo