/**
Author - Sahil Dhingra
Git - https://github.com/sahildhingra-221
* */

export default function handler(req, res) {
  if (req.method === 'POST') {
    const userMail = req?.body?.email;
    res.status(200).json({email: userMail});
  }
}
