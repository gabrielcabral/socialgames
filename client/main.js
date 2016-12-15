import { Template } from 'meteor/templating';

T9n.setLanguage('pt_BR');

console.log(Meteor.absoluteUrl('img/avatar-default.png'));

Avatar.setOptions({
  defaultImageUrl: "https://www.guidesmiths.com/uploads/images/1450466520567_avatar-default_1.png",
  cssClassPrefix: "custon-avatar"
});

