#include<stdio.h>

int gcd(int a,int b){
    a%b;
    if(b==0){
        return a;
    }
    return gcd(b,a%b);
}

int main(){
    int n,i,a,b,j,k,c,true=1;
    scanf("%d",&n);
    for(i=0;i<n;i++){
        scanf("%d %d",&a,&b);
        for(k=a;k<=b;k++){
            for(j=a;j<=b;j++){
                c=gcd(k,j);
                if(c>1 && k!=j){
                    printf("%d %d \n",k,j);
                    true=0;
                    break;
                }
                
                
            }
        if(c>1 && k!=j){
            
                    break;
        }
        
        }
        if(true==1){
            printf("%d\n",-1);
        }
        }
    
    
    return 0;
}