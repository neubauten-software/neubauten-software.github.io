<?xml version="1.0" encoding="utf-8"?>
<html xmlns:xsl="http://www.w3.org/1999/XSL/Transform" xsl:version="1.0">
<body>
    <a target="_blank">
        <xsl:attribute name="href">
            <xsl:value-of select="Button/@GoTo"/>.xml
        </xsl:attribute>
        <xsl:attribute name="title">
            <xsl:value-of select="Button"/>
        </xsl:attribute>
        <xsl:value-of select="Button"/>
    </a>
</body>
</html>
