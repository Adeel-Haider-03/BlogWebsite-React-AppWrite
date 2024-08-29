import React from 'react'
import { Editor as TinyMCE } from '@tinymce/tinymce-react'
import { Controller } from 'react-hook-form'

function Editor({label,name,control,defaultValue=''},ref) {
  return (
    <div className='w-full'>
    {label && <label className='inline-block mb-1 pl-1'>{label}</label>}

    <Controller
    name={name || 'content'}
    control={control}
    defaultValue={defaultValue}
    render={({field:{onChange}})=>(
        <TinyMCE
         apiKey='b9nqyjj40ix49ze0h7ggbb6s7tp7hf8d55ndd35e75wzk4a7'
        initialValue={defaultValue}
        init={{
          height: 500,
          menubar: true,
          plugins: [
            'advlist', 'autolink', 'lists', 'link', 'image', 'charmap', 'preview',
            'anchor', 'searchreplace', 'visualblocks', 'code', 'fullscreen',
            'insertdatetime', 'media', 'table', 'code', 'help', 'wordcount'
          ],
          toolbar: 'undo redo | blocks | ' +
            'bold italic forecolor | alignleft aligncenter ' +
            'alignright alignjustify | bullist numlist outdent indent | ' +
            'removeformat | help',
          content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }'
        }}
        onEditorChange={content=>onChange(content)}
        ref={ref}
      />
    )}
    />
    </div>
  )
}

export default React.forwardRef(Editor)
