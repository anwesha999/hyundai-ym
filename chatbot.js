 const styles = `
    .chatDetails {
        border-radius:inline
    }
`
    const frameDocument = window.frames && window.frames.ymIframe && window.frames.ymIframe.document
    var styleSheet = document.createElement("style")
    styleSheet.innerText = styles
    frameDocument.head.appendChild(styleSheet);