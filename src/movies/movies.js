import react from 'react';
import ReactPlayer from 'react-player';


function Movies() {
    return (
        <div class='container-fluid' style={{ backgroundColor: '#eee', height: '100%' ,width:'100%'}}>
            <div class="row" style={{padding:'1%'}}>
                <div class="col-3"><ReactPlayer  url={'https://www.youtube.com/watch?v=-BUDo3mow00'} width='100%'/></div>
                <div class="col-3"><ReactPlayer  url={'https://www.youtube.com/watch?v=-BUDo3mow00'} width='100%'/></div>
                <div class="col-3"><ReactPlayer  url={'https://www.youtube.com/watch?v=-BUDo3mow00'} width='100%'/></div>
                <div class="col-3"><ReactPlayer  url={'https://www.youtube.com/watch?v=-BUDo3mow00'} width='100%'/></div>
            </div>
            <div class="row" style={{padding:'1%'}}>
                <div class="col-3"><ReactPlayer  url={'https://www.youtube.com/watch?v=-BUDo3mow00'} width='100%'/></div>
                <div class="col-3"><ReactPlayer  url={'https://www.youtube.com/watch?v=-BUDo3mow00'} width='100%'/></div>
                <div class="col-3"><ReactPlayer  url={'https://www.youtube.com/watch?v=-BUDo3mow00'} width='100%'/></div>
                <div class="col-3"><ReactPlayer  url={'https://www.youtube.com/watch?v=-BUDo3mow00'} width='100%'/></div>
            </div>

        </div>
    )
}

export default Movies