<?xml version="1.0" encoding="utf-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
    <xsl:template match="Application">
        <html>
            <xsl:value-of select="Design"/>
        </html>
    </xsl:template>
    <xsl:for-each select="Button">
        <button>
            <xsl:attribute name="onclick">
                <xsl:value-of select="ClickEvent"/>
            </xsl:attribute>
            <xsl:value-of select="Text"/>
        </button>
    </xsl:for-each>
</xsl:stylesheet>
