import React from 'react'
import LanguageContext from './LanguageContext'

export default function LangControls(props) {
  return (
      <LanguageContext.Consumer>
          {/* value of LanguageContext */}
          {(value) => {
              return(
                <>
                <button
                    disabled={value.lang === 'en-GB'}>
                    British{' '}
                    <span role='img' aria-label='en-GB'>🇬🇧</span>
                </button>
                {' '}
                <button
                    disabled={value.lang === 'en-US'}>
                    American{' '}
                    <span role='img' aria-label='en-US'>🇺🇸</span>
                </button>
                {' '}
                <button
                    disabled={value.lang === 'ko'}>
                    Korean{' '}
                    <span role='img' aria-label='ko'>🇰🇷</span>
                </button>
                {' '}
                <button
                    disabled={value.lang === 'spanish'}>
                    Spanish{' '}
                    <span role='img' aria-label='spanish'>ESP</span>
                </button>
                </>
            )
        }}
        </LanguageContext.Consumer>
  );
}