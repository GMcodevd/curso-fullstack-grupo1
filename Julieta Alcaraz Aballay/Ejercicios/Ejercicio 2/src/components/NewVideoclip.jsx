function NewVideoclip(props) {
    return [
        <div style={style.Feed}>
            <h1 style={style.title}> {props.title} </h1>
            <h2 style={style.subTitle}> {props.subTitle}</h2>

            <iframe style={style.video}
                src={props.video}
                title={props.title}
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen>
            </iframe>

            <p style={style.p}> {props.p} </p>
        </div>

    ]
}
const style = {

    Feed: {
        backgroundColor: 'black',
        heigh: 'auto',
        width: 'auto',


    },

    title: {
        fontSize: 50,
        color: 'yellow',
        Fontfamily: 'goudy stout',
        textAlign: 'center',
    },
    subTitle: {
        fontSize: 30,
        color: 'green',
        Fontfamily: 'impact',
        textAlign: 'center',
    },
    video: {
        width: '50%',
        heigh: '50%',
        Align: 'center',
    },

    p: {
        fontSize: 15,
        color: 'white',
        Fontfamily: 'Abril',
        textAlign: 'center',
    },

}

export default NewVideoclip