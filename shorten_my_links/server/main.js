import { Meteor } from 'meteor/meteor';
import { Links } from '../imports/collections/links';
import ConnectRoute from 'connect-route';
import { WebApp }  from 'meteor/webapp';

Meteor.startup(() => {
  Meteor.publish('links',function(){
    return Links.find({});
  });
});

function onRoute(req,res,next){
  const link = Links.findOne({token: req.params.token});

  if (link){
    Links.update({_id: link._id},{$inc: {clicks: 1}});
    res.writeHead(307,{'Location': link.url});
    res.end();
  } else {
    next();
  }
}


const middleware = ConnectRoute(function(router){
  console.log("Kenny");
  router.get('/:token', onRoute);
});


WebApp.connectHandlers.use(middleware);
