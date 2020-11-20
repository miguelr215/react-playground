import React from 'react'
import LanguageContext from './LanguageContext'

export default function LangControls(props) {
  return (
      <LanguageContext.Consumer>
          {/* { function renderProp() { */}
          {(value) => {
              console.log(value)
              return(
                <>
                <button>
                    British{' '}
                    <span role='img' aria-label='en-GB'>🇬🇧</span>
                </button>
                {' '}
                <button>
                    American{' '}
                    <span role='img' aria-label='en-US'>🇺🇸</span>
                </button>
                {' '}
                <button>
                    Korean{' '}
                    <span role='img' aria-label='ko'>🇰🇷</span>
                </button>
                {' '}
                <button>
                    Spanish{' '}
                    <span role='img' aria-label='spanish'>ESP</span>
                </button>
                </>
            )
        }}
        </LanguageContext.Consumer>
  );
}