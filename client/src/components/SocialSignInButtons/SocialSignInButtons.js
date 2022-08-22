import React from 'react'
import CustomButton from '../CustomButton'

const SocialSignInButtons = () => {

    const onSignInwithFacebookPressed = () => {
        console.warn('onSignInwithFacebook');
    }
    const onSignInwithGooglePressed = () => {
        console.warn('onSignInwithGoogle');
    }
    return (
        <>
            <CustomButton
                text="Sign In with Google"
                onPress={onSignInwithGooglePressed}
                bgColor="#FAE9EA"
                fgColor="#DD4D44"
            />
            <CustomButton
                text="Sign In with Facebook"
                onPress={onSignInwithFacebookPressed}
                bgColor="#E7EAF4"
                fgColor="#4765A9"
            />
        </>
    )
}

export default SocialSignInButtons