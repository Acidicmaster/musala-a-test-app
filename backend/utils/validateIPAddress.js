const isIpv4Valid  =  (ipaddress) =>
{
 if  (/^(([0-9])|([1-9][0-9])|(1([0-9]{2}))|(2[0-4][0-9])|(25[0-5]))((\.(([0-9])|([1-9][0-9])|(1([0-9]{2}))|(2[0-4][0-9])|(25[0-5]))){3})/.
 test(ipaddress))
return true
else
return false
}

export default isIpv4Valid ;