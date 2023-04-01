# 품 Web UI

품은 Zero Waste를 실천하는 가게들을 사용자들에게 보여주는 웹앱입니다.

## Contribute

### .env 파일 설정하기

`.env` 파일을 설정해야합니다. 관리자에게 문의해서 `.env.sample` 파일을 참고하여 생성해 주세요.

### host 수정하기

cookie 설정을 위해 다음처럼 설정해주시길 바랍니다.

Mac에서는 `/etc/hosts` 파일을, Window에서는 `/Windows\System32\drivers\etc\hosts` 열어 다음처럼 수정합니다.

```
##
# Host Database
#
# localhost is used to configure the loopback interface
# when the system is booting.  Do not change this entry.
##
127.0.0.1       local-poom.c0dewave.com # <- 이 부분을 추가
127.0.0.1       localhost
255.255.255.255 broadcasthost
::1             localhost
# Added by Docker Desktop
# To allow the same kube context to work on the host and the container:
127.0.0.1 kubernetes.docker.internal
# End of section
```
