class AdvertisingChannel {
    constructor(data){
        this.name = data.site
        this.adViews = data.adViews
        this.adClicks = data.clicks
        this.conversions = data.conversions
    }
    conversionRate() {
        return (this.conversions/this.adClicks *100).toFixed(2);
    }
    getHtml() {
        return `
            <div class="site-name">${this.name}</div>
            <div>Views: ${this.adViews}</div>
            <div>Clicks: ${this.adClicks}</div>
            <div>Conversions: ${this.conversions}</div>
            <div>Conv. Rate: <span class="highlight">${this.conversionRate()}%</span></div>
        `
    }
}

export default AdvertisingChannel