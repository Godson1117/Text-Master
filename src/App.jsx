import { useState } from 'react'

function App() {

  const [inText, setInText] = useState('')
  const [outText, setOutText] = useState('')
  const [operation, setOperation] = useState('N/A')


  const buttons = [
    { name: 'Upper Case', definition: 'Converts the text to upper case', func: 'upperCase' },
    { name: 'Lower Case', definition: 'Converts the text to lower case', func: 'lowerCase' },
    { name: 'Capitalize', definition: 'Converts the first letter of each word to upper case' },
    { name: 'Title Case', definition: 'Converts the first letter of each word to upper case' },
    { name: 'Invert Case', definition: 'Converts the text to inverted case' },
    { name: 'Trim', definition: 'Removes the white spaces from the beginning and end of the text' },
    { name: 'Reverse', definition: 'Reverses the text' },
    { name: 'Clear', definition: 'Clears the text' },
    { name: 'Copy', definition: 'Copies the text to clipboard' },
    { name: 'Digit Extract', definition: 'Extracts the digits from the text' },
    { name: 'Word Count', definition: 'Counts the number of words in the text' },
    { name: 'Char Count', definition: 'Counts the number of characters in the text' },
    { name: 'Mark Down', definition: 'Converts the text to markdown' },
    { name: 'Line Count', definition: 'Counts the number of lines in the text' },
    { name: 'Replace', definition: 'Replaces the text' },
    { name: 'Sentence Case', definition: 'Converts the first letter of the first word to upper case' },
    { name: 'Character Extract', definition: 'Extracts the letters from the text' },
    { name: 'Base 64 Encode', definition: 'Encodes the text to base 64' },
    { name: 'Base 64 Decode', definition: 'Decodes the text from base 64' },
    { name: 'HTML Encode', definition: 'Encodes the text to HTML' },
    { name: 'HTML Decode', definition: 'Decodes the text from HTML' }
  ]

  const handleOperation = (op) => {
    if (op === 'Upper Case') {
      return inText.toUpperCase()
    }
    else if (op === 'Lower Case') {
      return inText.toLowerCase()
    }
    else if (op === 'Capitalize') {
      return inText.split(' ').map((word) => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')
    }
    else if (op === 'Title Case') {
      return inText.split(' ').map((word) => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')
    }
    else if (op === 'Trim') {
      return inText.trim()
    }
    else if (op === 'Reverse') {
      return inText.split('').reverse().join('')
    }
    else if (op === 'Clear') {
      setInText('')
      return ''
    }
    else if (op === 'Copy') {
      navigator.clipboard.writeText(outText);
      return 'Result copied to clipboard';
    }
    else if (op === 'Digit Extract') {
      return inText.split('').filter((char) => !isNaN(char)).join('')
    }
    else if (op === 'Word Count') {
      return inText.split(' ').filter((word) => word !== '').length
    }
    else if (op === 'Char Count') {
      return inText.split('').filter((char) => char !== ' ').length
    }
    else if (op === 'Mark Down') {
      return `# ${inText}`
    }
    else if (op === 'Line Count') {
      return inText.split('\n').filter((line) => line !== '').length
    }
    else if (op === 'Sentence Case') {
      return inText.split(' ').map((word, index) => index === 0 ? word.charAt(0).toUpperCase() + word.slice(1) : word).join(' ')
    }
    else if (op === 'Character Extract') {
      return inText.split('').filter((char) => isNaN(char)).join('')
    }
    else if (op === 'Base 64 Encode') {
      return btoa(inText)
    }
    else if (op === 'Base 64 Decode') {
      return atob(inText)
    }
    else if (op === 'HTML Encode') {
      return inText.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
    }
    else if (op === 'HTML Decode') {
      return inText.replace(/&amp;/g, '&').replace(/&lt;/g, '<').replace(/&gt;/g, '>')
    }
    else if (op === 'Replace') {
      const [find, replace] = prompt('Enter the text to find and replace separated by comma').split(',')
      return inText.split(find).join(replace)
    }
    else {
      return 'N/A'
    }
  }

  return (
    <>
      <div className='text-center'>
        <h2 className='text-blue-700 text-center font-bold font-serif text-3xl mt-5'>TEXT <span className='text-red-600'>MASTER</span></h2>
        <textarea cols="50" rows="5" value={inText} onChange={(e) => setInText(e.target.value)} placeholder=' Paste the sentence here...' className='m-5 rounded-lg' />
        <textarea cols="50" rows="5" disabled={true} value={outText} placeholder=' Your Ouput comes here' className='m-5 rounded-lg bg-slate-400' />

        <p className="bg-grey-200 text-emerald-600 h-4">Operation : {operation}</p>
        <div className='m-14 mt-16 grid grid-cols-3 gap-5 text-center'>
          {buttons.map((item) => (
            <>
              <div onMouseEnter={() => setOperation(item.definition)} onMouseLeave={() => setOperation('N/A')}>
                <button disabled={!inText} className="min-w-[120px] md:min-w-[200px] text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" onClick={() => { setOutText(handleOperation(item.name)) }}>{item.name}</button>
              </div>
            </>
          ))}
        </div>
      </div>
    </>
  )
}

export default App
