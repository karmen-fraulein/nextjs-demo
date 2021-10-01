import { MongoClient, ObjectId } from "mongodb";
import Head from "next/head";
import { Fragment } from "react";
import MeetupDetail from "../../components/meetups/MeetupDetail";

function MeetupDetails(props) {
    return (
        <Fragment>
            <Head>
                <title>{props.meetupData.title}</title>
                <meta name = 'description' content = {props.meetupData.description} />
            </Head>
            <MeetupDetail
                image={props.meetupData.image}
                title={props.meetupData.title}
                address={props.meetupData.address}
                description={props.meetupData.description}
            />
        </Fragment>

    );
}


export async function getStaticPaths(){

    const client = await MongoClient.connect('mongodb+srv://karmen:amorame987@cluster0.gebck.mongodb.net/meetups?retryWrites=true&w=majority');
    const db = client.db()

    const meetupsCollaction = db.collection('meetups');
    const meetups = await meetupsCollaction.find({}, {_id: 1}).toArray();

    client.close()

    return{
        fallback: false,
        paths: meetups.map((meetups) => ({ params: { meetupId: meetups._id.toString() },}),)

    }
}

export async function getStaticProps(context){
    //fetch data for single meetup

    const meetupId = context.params.meetupId;

    const client = await MongoClient.connect('mongodb+srv://karmen:testtest123@cluster0.gebck.mongodb.net/meetups?retryWrites=true&w=majority');
    const db = client.db()

    const meetupsCollaction = db.collection('meetups');
    const selectedMeetup = await meetupsCollaction.findOne({ _id: ObjectId(meetupId)})

    client.close()

    return{

        props:{
            meetupData: {
                id: selectedMeetup._id.toString(),
                title: selectedMeetup.title,
                address: selectedMeetup.address,
                description: selectedMeetup.description,
                image: selectedMeetup.image,
            },

        }
    }
}

export default MeetupDetails;